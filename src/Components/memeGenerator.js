import { Typography } from '@mui/material';
import React,{useState,useEffect} from 'react';

export default function GetMeme(){
	const [post, setPost] = useState([]);

	useEffect(()=>{
		fetch("https://www.reddit.com/r/Wallstreetbets/top.json?limit=10&t=year").then((response) => response.json()).then((data) =>
		{
			setPost();
			console.log(data)
		});
	},[])
	return (
		<div>
			
			<h1>Here is the definition</h1>
			{post.map((meaning)=>{
				
				return <p>{meaning.definitions[0].definition}</p>;
				
			})}
			
		</div>
	);	
}

