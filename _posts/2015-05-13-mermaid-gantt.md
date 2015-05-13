---
layout: post
---

#### Gantt

{% mermaid %}
gantt
    title A Gantt Diagram

    section Section
	A task            :a1 , 2015-05-10 , 30d
	B task            :after a1 , 20d

    section Another
	Task in sec       :2015-05-15 , 12d
	another task      : 24d
{% endmermaid %}
