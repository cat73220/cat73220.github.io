---
layout: post
---

#### Flowchart
{% mermaid %}
graph LR
    A[Start] -- note for a line --> B((a path))
	A --> C(The other path)
	B --> D{END}
	C --> D
{% endmermaid %}

#### Sequence
{% mermaid %}
sequenceDiagram
    participant Alice
	participant Bob
	Alice->>John: Hello John, how are you?
	loop Healthcheck
	    John->>John: Fight against hypochondria
	end
	Note right of John: Rational thoughts<br/>prevail...
	John-->>Alice: Great!
	John->>Bob: How about you?
	Bob-->>John: Pretty Good!
{% endmermaid %}
