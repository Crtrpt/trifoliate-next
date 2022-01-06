package com.vopd.server;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.vopd.datasource.JDBC;
import com.vopd.datasource.RESTFUL;
import com.vopd.dto.ApFlat;
import com.vopd.dto.SourceDto;
import com.vopd.entity.Ap;
import com.vopd.entity.Source;
import io.undertow.Undertow;
import io.undertow.util.Headers;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class Main {
    public static void main(String[] argv) throws SQLException, FileNotFoundException {
        Gson gson=new Gson();
        JsonReader jsonReader=new JsonReader(new FileReader(new File("./test.json")));
        List<SourceDto> config= gson.fromJson(jsonReader,new TypeToken<List<SourceDto>>(){}.getType());

        var sourceMap=config.stream().collect(
                Collectors.toMap(SourceDto::getId, sourceDto -> sourceDto.getApList().stream().collect(
                        Collectors.toMap(Ap::getId, ap -> new ApFlat(sourceDto,ap)))));

        Undertow server = Undertow.builder()
                .addHttpListener(8080, "localhost")
                .setHandler(exchange -> {
                    if(exchange.getRelativePath().equals("/favicon.ico")){
                        return;
                    }
                    var s=exchange.getRelativePath();
                    var re=  s.split("/");
                    exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/json");
                    log.info("access point source:"+re[2]+" point:"+re[3]);
                    var sourceId=re[2];
                    var apId=re[3];
                    var ap=sourceMap.get(sourceId).get(apId);
                    Object res=null;
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
                    var data=gson.toJson(res);
                    exchange.getResponseSender().send(data);
                }).build();
        log.info("start server");
        server.start();
    }
}
