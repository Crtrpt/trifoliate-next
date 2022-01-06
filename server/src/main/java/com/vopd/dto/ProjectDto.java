package com.vopd.dto;

import lombok.Data;

import javax.sql.DataSource;
import java.util.List;

@Data
public class ProjectDto {
    List<SourceDto> datasource;
    List<Object>    list;
}
