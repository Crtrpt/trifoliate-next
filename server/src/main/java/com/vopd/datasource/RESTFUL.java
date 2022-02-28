package com.vopd.datasource;

import com.google.gson.internal.LinkedTreeMap;
import com.vopd.dto.ApFlat;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Slf4j
public class RESTFUL {

    static HashMap<String, PoolingHttpClientConnectionManager> sourcePools = new HashMap<>();

    public Object run(ApFlat ap) throws IOException, URISyntaxException {
        var connectionManager = sourcePools.get(ap.getSource().getId());
        //2.创建httpclient对象
        var httpClient = HttpClients.custom()
                .setConnectionManager(connectionManager)//2.1
                .disableAutomaticRetries()//2.2
                .build();
        var url = ap.getSource().getConfig().get("url");
        var query = (LinkedTreeMap<String, Object>) ap.getAp().getQuery();

        log.info(" url ===========" + url + query.get("path"));

        HttpEntityEnclosingRequestBase httpRequestBase = new HttpEntityEnclosingRequestBase ()  {
            @Override
            public String getMethod() {
                return (String) query.get("method");
            }
        };
        if(((String) query.get("method")).equals("POST")){
            httpRequestBase.setEntity(new StringEntity((String) query.get("requestBody"), Charset.defaultCharset()));
        }

        httpRequestBase.setURI(new URI(url + (String) query.get("path")));

        //设置请求参数
        RequestConfig config = RequestConfig.custom().setConnectTimeout(5000) //连接超时时间
                .setConnectionRequestTimeout(500) //从线程池中获取线程超时时间
                .setSocketTimeout(8000) //设置数据超时时间
                .setStaleConnectionCheckEnabled(true) //提交请求前检查连接是否可用
                .build();

        httpRequestBase.setConfig(config);

        ((List<Map>) query.get("header")).stream().forEach(a->{
            httpRequestBase.addHeader(new BasicHeader((String) a.get("name"),(String)a.get("value")));
        });

        //返回数据
        CloseableHttpResponse response = null;
        String con = "";
        try {
            response = httpClient.execute(httpRequestBase);
            con = EntityUtils.toString(response.getEntity(), "utf-8");
//            System.out.println(con);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (response != null) {
                response.close();
            }
            //httpClient.close();
        }
        return con;
    }

    public void init(ApFlat ap) {
        if (sourcePools.containsKey(ap.getSource().getId())) {
            return;
        }
        //1.创建连接池管理器
        PoolingHttpClientConnectionManager connectionManager = new PoolingHttpClientConnectionManager(60000,//1.1
                TimeUnit.MILLISECONDS);
        connectionManager.setMaxTotal(1000);//1.2
        connectionManager.setDefaultMaxPerRoute(50);//1.3
        sourcePools.put(ap.getSource().getId(), connectionManager);
    }
}
