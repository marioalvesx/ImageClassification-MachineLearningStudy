int sign(float n){
   return n >= 0 ? 1 : -1;
}


class Perceptron {
  float[] weights = new float[2];
  float lr = 0.1; // Aprendizado
  
  //Constructor
  Perceptron() {
     for(int i = 0; i < weights.length; i++) {
        weights[i] = random(-1, 1); 
     }
  }
  
  int guess(float[] inputs) {
     float sum = 0;
     for (int i = 0; i < weights.length; i++){
        sum += inputs[i] * weights[i]; 
     }
     int output = sign(sum);
      return output;
  }
  
  void train(float[] inputs, int target) {
      int guess = guess(inputs);
      int error = target - guess;
      
      // Tune all the weights
      for (int i = 0; i < weights.length; i++) {
        weights[i] += error * inputs[i] * lr;
      }
  }  
  
}
