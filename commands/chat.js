const { SlashCommandBuilder, Events } = require('discord.js');
// const { ask } = require('../open-ai')
// const key = require('../key.json')
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: key.apiKey
// });
// const openai = new OpenAIApi(configuration);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
		.setDescription('Use it like you use chatGPT.')
		.addStringOption(option =>
			option
				.setName('query')
				.setDescription('prompt')
				.setRequired(true)),
	async execute(interaction) {
		const prompt = interaction.options.getString('query') ?? 'No city choosen';
		await interaction.reply(prompt)

		// // let latitude, longtitude;
		// async function loadCity() {
		// 	const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
		// 	return response.json();
		// }

		// let city = await loadCity()
		// // let results = city.results ?? []
		// /* get first instance of city from search query */
		// let latitude = city.results[0].latitude
		// let longitude = city.results[0].longitude

		// const event = new Date();
		// const todayDate = event.toLocaleDateString('en-GB');
		// const nowTime = event.toLocaleTimeString();

		// const dateFormat = todayDate.split('/');
		// const date = dateFormat.reverse().join('-');
		// const time = nowTime.split('.')

		// if (time.includes('0')) {
		// 	time = time[0][1];
		// }

		// const index = parseInt(time);

		// let url = (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=auto&start_date=${date}&end_date=${date}`)

		// async function loadForecast() {
		// 	const result = await fetch(url);
		// 	return result.json();
		// }

		// let forecastData = await loadForecast();
		// const stringJSON = JSON.stringify(forecastData)
		// // await interaction.reply(`Nama kota: ${cityName} lat: ${latitude}, long: ${longitude}. tanggal = ${date}, jam = ${time}, index = ${index}, type = ${typeof date}`);
		// // await interaction.reply(url)
		// await interaction.reply(stringJSON)
	},
};