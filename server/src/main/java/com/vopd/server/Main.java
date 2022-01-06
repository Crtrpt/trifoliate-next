package com.vopd.server;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.vopd.datasource.JDBC;
import com.vopd.datasource.RESTFUL;
import com.vopd.dto.ApFlat;
import com.vopd.dto.ProjectDto;
import com.vopd.dto.SourceDto;
import com.vopd.entity.Ap;
import io.undertow.Undertow;
import io.undertow.util.Headers;
import io.undertow.util.HttpString;
import lombok.extern.slf4j.Slf4j;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

@Slf4j
public class Main {
    static Properties properties=new Properties();
    static JsonReader jsonReader;
    static {
        try {
            properties.load(new FileReader("./conf/server.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            jsonReader = new JsonReader(new FileReader("./data/datasource.json"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }



    public static void main(String[] argv) {

        Gson gson=new Gson();
        ProjectDto project=new ProjectDto();
        List<SourceDto> config=new ArrayList<>();
        try{

            project= gson.fromJson(jsonReader,new TypeToken<ProjectDto>(){}.getType());
            config=project.getDatasource();
            jsonReader.close();
        }catch (Exception e){
            e.printStackTrace();
        }

        System.out.println(project);
        var sourceMap=config.stream().collect(
                Collectors.toMap(SourceDto::getId, sourceDto -> sourceDto.getApList().stream().collect(
                        Collectors.toMap(Ap::getId, ap -> new ApFlat(sourceDto,ap)))));


        ProjectDto finalProject = project;
        Undertow server = Undertow.builder()
                .addHttpListener(Integer.parseInt( (String)properties.get("app.server.port")), (String) properties.get("app.server.host"))
                .setHandler(exchange -> {
                    exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/json");
                    exchange.getResponseHeaders().put(new HttpString("Access-Control-Allow-Origin"), "*");
                    Object res=null;
                    if(exchange.getRelativePath().equals("/favicon.ico")){
                        return;
                    }
                    if(exchange.getRelativePath().equals("/get")){
                        res= gson.toJson(finalProject);
                    }else {
                        var s=exchange.getRelativePath();
                        var re=  s.split("/");

                        log.info("access point source:"+re[2]+" point:"+re[3]);
                        var sourceId=re[2];
                        var apId=re[3];
                        var ap=sourceMap.get(sourceId).get(apId);

                        if(ap.getSource().getRender().equals("JDBC")){
                            JDBC jdbc=new JDBC();
                            jdbc.init(ap);
                            res=jdbc.run(ap);

                        }
                        if(ap.getSource().getRender().equals("RESTFUL")){
                            RESTFUL restful=new RESTFUL();
                            restful.init(ap);
                            res=restful.run(ap);
                        }
                    }

                    exchange.getResponseSender().send((String) res);
                }).build();
        log.info("start server");
        server.start();
    }
}
