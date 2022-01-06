package com.vopd.server;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.vopd.datasource.JDBC;
import com.vopd.datasource.RESTFUL;
import com.vopd.dto.ApFlat;
import com.vopd.dto.SourceDto;
import com.vopd.entity.Ap;
import io.undertow.Undertow;
import io.undertow.util.Headers;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
public class JsonServer {
    public static void main(String[] argv) throws SQLException, FileNotFoundException {
        Gson gson=new Gson();


        Undertow server = Undertow.builder()
                .addHttpListener(8081, "localhost")
                .setHandler(exchange -> {

                    var data=gson.toJson(Map.of("name","server"));
                    exchange.getResponseSender().send(data);
                }).build();
        log.info("start server");
        server.start();
    }
}
