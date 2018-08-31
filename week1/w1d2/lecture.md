# The Dev Workflow

## Important Mindset

### The Growth Mindset

Potential Skill --> Realized Skill

1. You must practice to turn your potential skill into realized skill
2. With practice, your small potential skill can become a great realized skill

### The Design Mindset

#### Convergence

* What you want to accomplish
* What you'll create to make that happen
* Make stuff
* Reflect
* Repeat

#### Divergence

* Exploration
* Start small, get gradually bigger

* What over How

### Creative (Sticks & Carrots)

* Be nice to you

## Problem Solving

### Requirements

Set out the requirements for your problem


### Design

```java
function joinList(concepts) {
  if(concepts.length === 0) return "";
  return concepts.reduce(function(agg, concept) {
    return agg + ", " + concept;
    });
}

```