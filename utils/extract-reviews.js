const fs = require("fs");
const cheerio = require("cheerio");

function extractReviews(filePath) {
  fs.readFile(filePath, "utf8", (err, htmlContent) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const $ = cheerio.load(htmlContent);
    const reviewBlocks = $(".sc-7aea6741-0.fMmywo");
    const reviews = [];

    reviewBlocks.each((index, element) => {
      const avatar = $(element)
        .find(".ui__sc-19rdopt-0.jNbDrT.cui-avatar-image img")
        .attr("src");
      const name = $(element)
        .find(".info .headline .name")
        .text()
        .replace(/\n/g, "")
        .replace(/\s+/g, " ")
        .trim();
      const date = $(element).find(".info .headline .time").text();
      const review = $(element)
        .find(".info .content")
        .text()
        .replace(/\n/g, "")
        .replace(/’/g, "&apos;")
        .replace(/\s+/g, " ")
        .trim();

      reviews.push({ avatar, name, review, date });
    });

    fs.writeFile(
      "./reviews.json",
      JSON.stringify(reviews, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing to file:", writeErr);
        } else {
          console.log('Successfully wrote reviews to "reviews.json"');
        }
      }
    );
  });
}

extractReviews("./reviews.html");
