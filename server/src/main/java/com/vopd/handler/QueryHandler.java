package com.vopd.handler;


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
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.util.Headers;
import io.undertow.util.HttpString;
import lombok.extern.slf4j.Slf4j;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.stream.Collectors;


@Slf4j
public class QueryHandler implements HttpHandler {

    Ctx ctx;

    public QueryHandler(Ctx ctx) {
        this.ctx=ctx;
    }

    @Override
    public void handleRequest(HttpServerExchange exchange) throws Exception {
        exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/json");
        exchange.getResponseHeaders().put(new HttpString("Access-Control-Allow-Origin"), "*");
        Object res = null;

        var s = exchange.getRelativePath();

        System.out.println(s);
        var re = s.split("/");


        log.info("access point source:" + re[1] + " point:" + re[2]);
        var sourceId = re[1];
        var apId = re[2];
        var ap =ctx.getSourceMap().get(sourceId).get(apId);
        if (ap.getSource().getRender().equals("JDBC")) {
            JDBC jdbc = new JDBC();
            jdbc.init(ap);
            res = jdbc.run(ap);

        }
        if (ap.getSource().getRender().equals("RESTFUL")) {
            RESTFUL restful = new RESTFUL();
            restful.init(ap);
            res = restful.run(ap);
        }
        exchange.getResponseSender().send((String) res);
    }
}
