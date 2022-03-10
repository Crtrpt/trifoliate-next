package com.vopd.dto;

import lombok.Data;

import java.util.HashMap;
import java.util.List;

@Data
public class ProjectDto {
    List<SourceDto> datasource;
    List<Object>    list;
    String api;
    List<Object> env;
    Integer maxId;
    Object page;
    HashMap<String,Object> hashIds;
    HashMap<String,Object> hashNames;
}
