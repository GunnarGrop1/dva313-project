package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
        MetricsCollector metCol = new MetricsCollector();
        HttpHandler HttpHandler = new HttpHandler();

        String cpu_load = metCol.WindowsCollectCpuLoad();

        System.out.println(cpu_load);
        System.out.println(metCol.WindowsCollectTotalRam());
        HttpHandler.Upload(cpu_load);
    }
}
