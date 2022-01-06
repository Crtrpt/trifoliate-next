package com.vopd.dto;

import com.vopd.entity.Ap;
import com.vopd.entity.Source;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
@Data
public class SourceDto  {
    String id;
    String name;
    String render;
    List<Ap> apList;
    HashMap<String,Object> config;
}
