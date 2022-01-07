package com.vopd;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import com.vopd.dto.ApFlat;
import com.vopd.dto.ProjectDto;
import com.vopd.dto.SourceDto;
import com.vopd.entity.Ap;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Map;
import java.util.Properties;
import java.util.stream.Collectors;

@Data
@Slf4j
public class Ctx {

    Properties properties = new Properties();

    Map<String, Map<String, ApFlat>> sourceMap;

    ProjectDto project;

    public Ctx() {
        log.info("init========================");
        try {
            properties.load(new FileReader("./conf/server.properties"));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            JsonReader jsonReader = new JsonReader(new FileReader("./data/datasource.json"));

            Gson gson = new Gson();
            project = gson.fromJson(jsonReader, new TypeToken<ProjectDto>() {
            }.getType());

            var config = project.getDatasource();

            sourceMap = config.stream().collect(
                    Collectors.toMap(SourceDto::getId, sourceDto -> sourceDto.getApList().stream().collect(
                            Collectors.toMap(Ap::getId, ap -> new ApFlat(sourceDto, ap)))));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
