module.exports.bubble=function(arr)
{
	for(let i=0;i<arr.length-1;i++)
	{
		for(let j=0;j<(arr.length-i-1);j++)
		{
			if(arr[j]>arr[j+1])
			{
			var	swap=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=swap;
			/*console.log(arr[j]);*/
		}
		}
	}
	//for(let i=0;i<arr.length;i++)
		console.log(arr);
	//return arr;
}

module.exports.selection=function(arr)
{
	 for (var i = 0 ; i < ( arr.length - 1 ) ; i++ )
   {
      pos = i;
 
      for ( j= i + 1 ; j < arr.length ; j++ )
      {
         if ( arr[pos] > arr[j] )
            pos = j;
      }
      if ( pos != i )
      {
        var swap = arr[i];
         arr[i] = arr[pos];
         arr[pos] = swap;
      }
   }
   console.log(arr);
}
module.exports.insertion=function(arr)
{
 for (i = 1 ; i <= arr.length - 1; i++) {
    j = i;
 
    while ( j > 0 && arr[j] < arr[j-1]) {
      var swap          = arr[j];
      arr[j]   = arr[j-1];
      arr[j-1] = swap;
 
      j--;
    }
  }
  console.log(arr);
}