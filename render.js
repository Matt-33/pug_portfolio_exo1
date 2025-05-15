const pug = require("pug");
const path = require("path");

function renderView(viewFilePath, data = {}) {
	const fullPath = path.join(__dirname, "views", viewFilePath);
	return pug.renderFile(fullPath, {
		...data,
		pretty: true,
	});
}

module.exports = renderView;
