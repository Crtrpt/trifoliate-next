package com.vopd.server;

import com.google.gson.Gson;
import io.undertow.Undertow;
import lombok.extern.slf4j.Slf4j;
import org.xnio.streams.ChannelInputStream;

import java.io.FileNotFoundException;
import java.sql.SQLException;
import java.util.Map;

@Slf4j
public class ExampleHttpServer {
    public static void main(String[] argv) throws SQLException, FileNotFoundException {
        Gson gson=new Gson();
        Undertow server = Undertow.builder()
                .addHttpListener(8081, "localhost")
                .setHandler(exchange -> {
                    log.info("url:  "+exchange.getRequestURL());
                    var s=new ChannelInputStream(exchange.getRequestChannel());
                    var body=s.readAllBytes();
                    var data=gson.toJson(Map.of(
                            "url:  ",exchange.getRequestURL(),
                            "method",exchange.getRequestMethod().toString(),
                            "header",exchange.getRequestHeaders().toString(),
                            "name","server",
                            "body",new String(body),
                            "time",System.currentTimeMillis()));
                    exchange.getResponseSender().send(data);
                })
                .build();
        log.info("start server");
        server.start();
    }
}
