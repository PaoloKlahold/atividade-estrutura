/* referência bibliográfica */

function swap(arr,xp,yp){ 
	[arr[xp],arr[yp]] = [ arr[yp],arr[xp]] 
} 


export default function selectionSort(arr){ 

	let n = arr.length; 
    
	let min; 

	let i , j; 
	
	for( i = 0; i < n-1;++i){ 
		min = i; 
		for(j = i+1; j < n; j++){ 
			if(arr[j]<arr[min]) min = j; 
		} 
		
		if(min!=i) 
		swap(arr,min,i); 
	} 
} 
