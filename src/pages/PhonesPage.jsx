import { Link, useParams } from "react-router-dom";
import { getPhonesFromAPI, getOnePhoneFromAPI } from "../services/phoneService";
import { useState, useEffect } from "react";

function PhonesPage() {
	const [phonesSt, setPhoPesSt] = useState([]);
	const [onePhoneSt, setOnePhoneSt] = useState();
	const { id } = useParams();

	const getPhones = async () => {
		const phones = await getPhonesFromAPI();
		setPhoPesSt(phones);
	};

	const getImageUrl = (name) => {
		return new URL(`../assets/images/${name}`, import.meta.url).href;
	};

	const getOnePhone = async () => {
		const phone = await getOnePhoneFromAPI(id);
		setOnePhoneSt(phone);
	};

	useEffect(() => {
		setTimeout(() => {
			getPhones();
		}, 800);
	}, []);

	useEffect(() => {
		getOnePhone();
	}, [id]);

	return (
		<div>
			{phonesSt.map((phone) => {
				return (
					<div key={phone.id}>
						<Link to={`/${phone.id}`}>
							<h3>{phone.name}</h3>
						</Link>
						{id == phone.id ? (
							<div>
								<img
									src={getImageUrl(onePhoneSt.imageFileName)}
									alt="phone image"
								/>
								<p>Manufacturer: {onePhoneSt.manufacturer}</p>
								<p>Description: {onePhoneSt.description}</p>
								<p>Color: {onePhoneSt.color}</p>
								<p>Screen: {onePhoneSt.screen}</p>
								<p>Processor: {onePhoneSt.processor}</p>
								<p>Ram: {onePhoneSt.ram}GB</p>
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
}

export default PhonesPage;
