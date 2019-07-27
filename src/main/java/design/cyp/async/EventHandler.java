package design.cyp.async;

import java.util.List;

public interface EventHandler {

    void  doHandler (EventModel eventModel);

    List<EventType> getSupportEventTypes();

}
