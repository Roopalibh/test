module.exports.linear=function(arr,no)
{
for(var i=0;i<arr.length;i++)
{
	if(arr[i]==no)
		break;
}
console.log(i);
}
module.exports.binary=function(arr,no)
{
	var mid=(arr.length)/2;
	var l=0;
	var u=arr.length-1;

	for(i=0;i<arr.length;i++)
	{
		if(no==arr[mid])
			break;
		else if(no<arr[mid])
		{
			u=mid-1;
			mid=(l+u)/2;
		}
		else
		{
           l=mid+1;
           mid=(i+u)/2;
		}
	}
	console.log(mid);
}