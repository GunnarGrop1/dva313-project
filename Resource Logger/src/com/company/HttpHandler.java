package com.company;


import sun.net.www.http.HttpClient;

import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.Map;

public class HttpHandler {
    URL url;
    HttpURLConnection con;
    Map<String,String> Args;

    public HttpHandler() {

    }
    public void Upload(String ToUpload) {
        try {
            url = new URL("http://localhost/temp.php?CPU=" + ToUpload);
            con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("User-Agent", "Mozilla/5.0");
            con.connect();
            int responseCode = con.getResponseCode();

        } catch (Exception e){

        }
    }
    public String UploadWithPost(String param) {
        return null;
    }
    public String RenewConfiguration() {
        return null;
    }

}
