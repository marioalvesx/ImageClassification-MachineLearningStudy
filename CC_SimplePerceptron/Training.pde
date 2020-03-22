
class Point {
  float x;
  float y;
  int label;

  Point() {
    x = random(width); 
    y = random(height);

    label = x > y ? 1 : -1;
  }

  void show() {
    stroke(0);
    int value = label == 1 ? 255 : 0;
    fill(value);
  
    ellipse(x, y, 32, 32);
  }

}
