package com.vopd.handler;


import com.vopd.Ctx;
import com.vopd.datasource.JDBC;
import com.vopd.datasource.RESTFUL;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.util.Headers;
import io.undertow.util.HttpString;
import lombok.extern.slf4j.Slf4j;


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
        var sourceId =  exchange.getQueryParameters().get("source").getFirst();
        var apId =  exchange.getQueryParameters().get("ap").getFirst();
        log.info(" source :"+sourceId+" ap :"+apId);
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
