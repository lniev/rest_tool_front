// @ts-nocheck

class Config {
	static isProduction = process.env.NODE_ENV === "production";
	static child_react_baseRoute = Config.isProduction
		? "/child_react/rp/"
		: "/rp/";
	static child_react_url = Config.isProduction
		? "http://112.124.18.15/child_react"
		: "http://localhost:8077";
}

export default Config;
