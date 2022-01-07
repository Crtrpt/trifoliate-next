package com.vopd.server;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.vopd.Ctx;
import com.vopd.datasource.JDBC;
import com.vopd.datasource.RESTFUL;
import com.vopd.dto.ApFlat;
import com.vopd.dto.ProjectDto;
import com.vopd.dto.SourceDto;
import com.vopd.entity.Ap;
import com.vopd.handler.GetHandler;
import com.vopd.handler.QueryHandler;
import io.undertow.Handlers;
import io.undertow.Undertow;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.server.handlers.resource.PathResourceManager;
import io.undertow.server.handlers.resource.ResourceHandler;
import io.undertow.util.Headers;
import io.undertow.util.HttpString;
import lombok.extern.slf4j.Slf4j;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

@Slf4j
public class Main {
    static Properties properties = new Properties();
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
        log.info("public location   :   " + (String) properties.get("app.server.public.location"));
        log.info("public root       :   " + (String) properties.get("app.server.public.root"));
        log.info("public index      :   " + (String) properties.get("app.server.public.index"));
        var ctx=new Ctx();
        Undertow server = Undertow.builder()
                .addHttpListener(Integer.parseInt((String) properties.get("app.server.port")), (String) properties.get("app.server.host"))
                .setHandler(Handlers.path()
                        .addPrefixPath((String) properties.get("app.server.public.location"), new ResourceHandler(new PathResourceManager(Paths.get((String) properties.get("app.server.public.root")), 100)).addWelcomeFiles((String) properties.get("app.server.public.index")))
                        .addPrefixPath("/get", new GetHandler(ctx))
                        .addPrefixPath("/query", new QueryHandler(ctx))
                )
                .build();
        log.info("start server");
        server.start();
    }
}
