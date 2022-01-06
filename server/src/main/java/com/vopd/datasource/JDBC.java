package com.vopd.datasource;

import com.vopd.dto.ApFlat;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.slf4j.Slf4j;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

@Slf4j
public class JDBC {

    static HashMap<String,HikariDataSource> sourcePools =new HashMap<>();

    public void init(ApFlat ap){
        if(sourcePools.containsKey(ap.getSource().getId())){
            return;
        }
        log.info("init data pools");
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl((String) ap.getSource().getConfig().get("url"));
        config.setUsername((String) ap.getSource().getConfig().get("username"));
        config.setPassword((String) ap.getSource().getConfig().get("password"));
        HikariDataSource ds = new HikariDataSource(config);
        sourcePools.put(ap.getSource().getId(),ds);
    }

    public Object run(ApFlat ap) throws SQLException {
        var conn=  sourcePools.get(ap.getSource().getId()).getConnection();
        var s=conn.prepareStatement((String) ap.getAp().getQuery()).executeQuery();
        var ret=new ArrayList<>();
        var md=s.getMetaData();
        int colCount=s.getMetaData().getColumnCount();

        while (s.next()){
            HashMap<String,Object> row=new HashMap<>();
            for (int i=1;i<=colCount;i++){
                row.put(md.getColumnName(i),s.getObject(i));
            }
            ret.add(row);
        }
        conn.close();
        return  ret;
    }
}
