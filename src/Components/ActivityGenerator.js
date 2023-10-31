
import React,{useState,useEffect} from 'react';

export default function GetActivity(){
	const [post, setPost] = useState({});
	const value = post[Object.keys(post)[0]]

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
			return <div>
				<ul>Activity,Type, Price, Link, Key, Accessibility
					
					<li>{post[activity]}</li>
					<li>{value}</li>
					
				</ul>
				
				</div>
			
			})}
			
		</div>
	);	
}

