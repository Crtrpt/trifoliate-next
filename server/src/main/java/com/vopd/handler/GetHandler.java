package com.vopd.handler;


import com.google.gson.Gson;
import com.vopd.Ctx;
import com.vopd.dto.ProjectDto;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.util.Headers;
import io.undertow.util.HttpString;

public class GetHandler implements HttpHandler {
    Gson gson = new Gson();
    Ctx ctx;
    public GetHandler(Ctx project) {
        this.ctx=ctx;
    }

    @Override
    public void handleRequest(HttpServerExchange exchange) throws Exception {
        exchange.getResponseHeaders().put(Headers.CONTENT_TYPE, "text/json");
        exchange.getResponseHeaders().put(new HttpString("Access-Control-Allow-Origin"), "*");
        exchange.getResponseSender().send((String) gson.toJson(this.ctx));
        exchange.endExchange();
    }
}
