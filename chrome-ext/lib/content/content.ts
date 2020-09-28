import { textSize, textSizeStyler } from '../evaluator/content-side/text-size';
import { AnalysisConfig, AnalysisResult } from '../../../types/types';
import { textFontType } from '../evaluator/content-side/text-font-type';

if ((window as any).SWDS === undefined) {
    (window as any).SWDS = {};
    const SWDS = (window as any).SWDS;

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        // console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
        // console.log(sender);
        const message = request.message as string;
        const config = request.config as AnalysisConfig;

        if (message == "analyze") {

            // Analyze Contents
            const html = document.documentElement.outerHTML;

            const textSizeResult = textSize(document, config.textSize);
            textSizeStyler(config.textSize);

            const textFontTypeResult = textFontType();

            // TEMP pictures
            const picturesResult = {
                count: document.images.length
            };
            var images = [];
            var elements = document.body.getElementsByTagName("*");
            
            Array.prototype.forEach.call(elements, function ( el ) {
                var style = window.getComputedStyle( el );
                if ( style.backgroundImage != "none" ) {
                    images.push( style.backgroundImage.slice( 4, -1 ).replace(/['"]/g, ""))
                }
            })

            picturesResult.count += images.length;

            // Result

            const analysisResult: AnalysisResult = {
                html,
                textSizeResult,
                textFontTypeResult,
                analysisConfig: config,
                picturesResult,
            };

            // Result
            sendResponse(analysisResult);
            return;
        };
    });
}