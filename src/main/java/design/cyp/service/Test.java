package design.cyp.service;

import org.springframework.beans.factory.annotation.Autowired;
import redis.clients.jedis.Jedis;

public class Test {

    public static void main(String[] argv) {
        JedisAdapter jedisAdapter = new JedisAdapter();
        System.out.println(jedisAdapter);

    }
}
