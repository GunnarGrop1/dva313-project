package com.company;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class MetricsCollector {
    Process p;
    String Command;

    public MetricsCollector() {

    }

    public String WindowsCollectCpuLoad() {
        Command = "wmic cpu get LoadPercentage /value";
        return WmicCaller(Command);
    }
    public int WindowsCollectTotalRam() {
        Command = "wmic os get TotalVisibleMemorySize";
        String RamSizeInKB = WmicCaller(Command);
        return KiloByteToMegaByteConverter(RamSizeInKB);
    }

    public int WindowsCollectRamUsage() {
        Command = "wmic os get FreePhysicalMemory";
        String FreeMemory = WmicCaller(Command);
        return KiloByteToMegaByteConverter(FreeMemory);
    }

    private String WmicCaller(String Command) {
        String output = "";
        try {
            p = Runtime.getRuntime().exec(Command);
            p.waitFor();

            BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                output = output.concat(line);
            }

        }catch (Exception e){
            System.out.println("faiiiil"); return null;
        }

        output = output.replaceAll( "[^\\d]", "" );
        return output;
    }

    private int KiloByteToMegaByteConverter(String value) {
        int IntegerValue = Integer.parseInt(value);
        return IntegerValue / 1024;
    }
}