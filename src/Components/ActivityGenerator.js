
import React,{useState,useEffect} from 'react';

export default function GetActivity(){
	const [post, setPost] = useState({});
	const value = post[Object.keys(post)[0]]
	const value1 = post[Object.keys(post)[1]]
	const value2 = post[Object.keys(post)[2]]
	const value3 = post[Object.keys(post)[3]]
	const value4 = post[Object.keys(post)[4]]
	

	useEffect(()=>{
		fetch("https://www.boredapi.com/api/activity").then((response) => response.json()).then((data) =>
		{
			setPost(data);
			console.log(JSON.stringify(data))
		});
	},[setPost])
	return (
		<div>
			
			<h1>Something to Do when you're bored!</h1>
			{post && Object.keys(post).map((activity) => {
			return <div> {(post[Object.keys(post)[4]] === "") ? <p> </p> : <p></p> }
				<ul>Activity,Type, Price, and Link
					
					<li>{value}</li>
					<li>{value1}</li>
					<li>{value2}</li>
					<li>{value3}</li>
					<li>Link:{value4}  </li>
								
				</ul>
				
				</div>
			
			})}
			
		</div>
	);	
}

