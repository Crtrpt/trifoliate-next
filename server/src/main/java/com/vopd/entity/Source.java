package com.vopd.entity;

import com.vopd.dto.SourceDto;
import lombok.Data;

import java.util.HashMap;

@Data
public class Source {
    String id;
    String name;
    String render;
    String renderQuery;
    HashMap<String,Object> config;

    public Source(SourceDto sourceDto){
        this.id=sourceDto.getId();
        this.name=sourceDto.getName();
        this.render=sourceDto.getRender();
        this.config=sourceDto.getConfig();
    }

}
