document.getElementById('calculate-btn').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmiUnit = document.querySelector('input[name="bmi"]:checked').value;
  
    if (!height || !weight) {
      alert('Please enter a valid height and weight.');
      return;
    }
  
    let bmi;
  
    if (bmiUnit === 'kgs') {
      bmi = weight / (height*height);
    } else {
      bmi = (weight * 2.2046) / (height * 0.0254) ** 2;
    }
  
    document.getElementById('result').value = bmi.toFixed(2);
  });
