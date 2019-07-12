package design.cyp.model;

import java.util.HashMap;
import java.util.Map;

public class ViewObject {
    //把显示的东西整合到这里，方便显示
    private Map<String, Object> objectMap = new HashMap<String, Object>();

    public void set(String key, Object value) {
        objectMap.put(key, value);
    }

    public Object get(String key){
        return objectMap.get(key);
    }
}
