for(let i = 0; i < 5; i++)  {
    for(let j=4; j > i; j--)  {
      // space
      document.write('&nbsp');
    }
    for(let j=0; j <= i; j++)  {
      document.write('*');
    }
    for(let j=1; j <= i; j++)  {
      document.write('*');
    }
    document.write('<br>');
  }

  //for(처음(1),조건(2); 끝(4))){}