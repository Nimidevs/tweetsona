import { useEffect, useState } from "react";
import { analyzeTweets } from "../services/analyzeTweets_service";
import { Lightbulb } from "lucide-react";
import { imagePromptStore } from "../store/store";
interface frequency {
  word: string;
  count: number;
}
interface analysis {
  sentiment: string;
  sentiment_reasoning: string;
  personality: string;
  vibe: string;
  image_prompt: string;
  word_frequency: frequency[];
}

const Analysis = () => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<analysis | null>(null);
    // State to track the current step: 'analyzing', 'processing', 'complete'
  const [step, setStep] = useState('analyzing');
  // const [mockresponse, setMockresponse] = useState<number | null>(null)
  const addPrompt = imagePromptStore((state) => state.addPrompt)


  let called = false;
  useEffect(() => {
    if (!called) {
      called = true;
      analyzeUsersTweets();
    }
  }, []);

  useEffect(() => {
    const timers: number[] = [];
    
    // Move to 'processing' after 2 seconds
    timers.push(
      setTimeout(() => {
        setStep('processing');
      }, 5000)
    );

    // Move to 'complete' after 4 seconds
    timers.push(
      setTimeout(() => {
        setStep('complete');
      }, 9000)
    );


    // Cleanup timers on unmount
    return () => timers.forEach(clearTimeout);
  }, []);
  
    // Helper function to determine step styles

  const analyzeUsersTweets = async () => {
    try {
      setLoading(true);
      // const response = await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve({ status: 400, data: 'failed' });
      //   }, 14000); // Simulate network delay
      // });
      // setMockresponse(10)
      const response = await analyzeTweets();
      setAnalysis(response);
      addPrompt(response.image_prompt)
      setStep('finished')
    } catch (error) {
      console.log(error);
      setStep('error')
    } finally {
      setLoading(false);
    }
  };

  const getStepStyles = (currentStep: string) => {
    const stepsOrder = ['analyzing', 'processing', 'complete', 'finished'];
    const currentIndex = stepsOrder.indexOf(step);
    const stepIndex = stepsOrder.indexOf(currentStep);

    if (stepIndex < currentIndex) {
      // Completed step
      return {
        iconContainer: 'bg-gradient-to-br from-[#4a4b50] to-[#2e2f33]',
        icon: 'text-[#34d399]', // Green for completed
        isCompleted: true,
      };
    } else if (stepIndex === currentIndex) {
      // Active step
      return {
        iconContainer: 'bg-gradient-to-br from-[#4a4b50] to-[#2e2f33] animate-pulse',
        icon: 'text-[#f4d03f]', // Yellow for active
        isCompleted: false,
      };
    } else {
      // Pending step
      return {
        iconContainer: 'bg-[#2e2f33]',
        icon: 'text-[#a7a8af]', // Gray for pending
        isCompleted: false,
      };
    }
  };

  return (
    <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 md:max-w-[960px] flex-1">
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
          Analyzing your personality
        </h2>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between">
            <p className="text-white text-base font-medium leading-normal">
              Analyzing your tweets
            </p>
          </div>
          <div className="rounded bg-[#44454b] overflow-hidden">
            <div className="h-2 rounded bg-white animate-progress"></div>
          </div>
        </div>
        <div className="flex items-end gap-3 p-4 justify-end">
          <div className="flex flex-1 flex-col gap-1 items-end">
            <p className="text-[#a7a8af] text-[13px] font-normal leading-normal max-w-[360px] text-right">
              Person1
            </p>
            <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-lg px-4 py-3 bg-[#30344d] text-white">
              Just a few more seconds and your analysis will be ready.
            </p>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style={{
              backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/014920d7-e0b4-4ffa-823a-811dd0d3cdbc.png")`,
            }}
          ></div>
        </div>
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="flex flex-col items-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 border-4 border-blue-700 border-dashed rounded-full animate-spin"></div>
              <h1 className="text-2xl font-bold text-white">
                Peeking at your vibes...
              </h1>
              <p className="text-gray-400">
                Please wait while we analyse your tweets 🔄
              </p>
            </div>
          </div>
        )}

        {!loading && analysis && (
          <div className="flex flex-col gap-4 p-6 bg-[#2e2f33] rounded-xl border border-[#3e3f44] text-white shadow-2xl backdrop-blur-sm bg-opacity-90">
            {/* Header */}
            <div className="pb-4 border-b border-[#3e3f44] text-center">
              <h2 className="text-xl font-bold text-[#f0f0f0] text-capitalize">
                Tweet Personality Analysis
              </h2>
              <p className="text-sm text-[#a7a8af] mt-1">
                {" "}
                This analysis generated from your last 5 tweets gives insights
                into your sentiment, personality, and language usage
              </p>
            </div>

            {/* Sentiment with colored indicator */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <Lightbulb
                  size={20}
                  className={`
    animate-pulse
    drop-shadow-md
    ${
      analysis.sentiment === "Positive"
        ? "text-green-500"
        : analysis.sentiment === "Negative"
        ? "text-red-500"
        : "text-yellow-500"
    }
  `}
                />

                <h3 className="text-lg font-semibold text-[#f0f0f0]">
                  Sentiment
                </h3>
              </div>

              <p className="text-base font-medium text-[#d1d1d1]">
                {analysis.sentiment}
              </p>
            </div>

            {/* Personality with icon */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🧠</span>
                <h3 className="text-lg font-semibold text-[#f0f0f0]">
                  Personality
                </h3>
              </div>
              <p className="text-base text-[#d1d1d1] leading-relaxed">
                {analysis.personality}
              </p>
            </div>

            {/* Vibe with decorative emoji */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎭</span>
                <h3 className="text-lg font-semibold text-[#f0f0f0]">Vibe</h3>
              </div>
              <p className="text-base text-[#d1d1d1]">{analysis.vibe}</p>
            </div>

            {/* Word Frequency */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔤</span>
                <h3 className="text-lg font-semibold text-[#f0f0f0]">
                  Frequently Used Words
                </h3>
              </div>
              <p className="text-base font-medium text-[#d1d1d1]">
                No Frequently Used words
              </p>
              {/* <div className="space-y-2">
                {analysis.word_frequency.slice(0, 10).map((word, index) => {
                  const maxCount = Math.max(
                    ...analysis.word_frequency.map((w) => w.count)
                  );
                  const percentage = (word.count / maxCount) * 100;

                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-gray-300 mb-1">
                        <span className="text-white font-medium">
                          {word.word}
                        </span>
                        <span>{word.count}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded">
                        <div
                          className="h-full bg-blue-500 rounded transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div> */}

              {/* <div className="flex flex-wrap gap-2">
        {analysis.word_frequency?.slice(0, 5).map((word, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-[#ffffff10] border border-[#ffffff15]"
          >
            {word.word} <span className="text-[#a7a8af]">({word.count})</span>
          </span>
        ))}
      </div> */}
            </div>

            {/* Reasoning with subdued text */}
            <div className="mt-4 p-4 bg-[#38393d] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📝</span>
                <h3 className="text-lg font-semibold text-[#f0f0f0]">
                  Why this analysis?
                </h3>
              </div>
              <p className="text-sm text-[#a7a8af] leading-snug">
                {analysis.sentiment_reasoning}
              </p>
            </div>

            {/* Button with smooth hover effect */}
            <div className="mt-6 flex justify-end">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                View Generated Images
              </button>
            </div>
          </div>
        )}

        {(
         <div className="relative">
         {/* Header */}
         <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
           What's happening?
         </h2>
   
         {/* Timeline Container */}
         <div className="relative pl-8">
           {/* Vertical Line (Timeline) */}
           <div className="absolute left-6 top-0 h-full w-0.5 bg-[#4a4b50]"></div>
   
           {/* Step 1: Analyzing Tweets */}
           <div className="flex items-start gap-4 px-4 min-h-[72px] py-4 relative">
             <div className={`absolute left-0 top-4 flex items-center justify-center rounded-lg ${getStepStyles('analyzing').iconContainer} shrink-0 size-12 z-10`}>
               {getStepStyles('analyzing').isCompleted ? (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('analyzing').icon}
                 >
                   <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,48H48V208H208V48Z"></path>
                 </svg>
               ) : (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('analyzing').icon}
                 >
                   <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                 </svg>
               )}
             </div>
             <div className="flex flex-col justify-center ml-12">
               <p className="text-white text-base font-medium leading-normal line-clamp-1">
                 Analyzing your tweets
               </p>
               <p className="text-[#a7a8af] text-sm font-normal leading-normal line-clamp-2">
                 Tokenizing words and extracting sentiment...
               </p>
             </div>
           </div>
   
           {/* Step 2: Processing Analysis */}
           <div className="flex items-start gap-4 px-4 min-h-[72px] py-4 relative">
             <div className={`absolute left-0 top-4 flex items-center justify-center rounded-lg ${getStepStyles('processing').iconContainer} shrink-0 size-12 z-10`}>
               {getStepStyles('processing').isCompleted ? (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('processing').icon}
                 >
                   <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,48H48V208H208V48Z"></path>
                 </svg>
               ) : (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('processing').icon}
                 >
                   <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
                 </svg>
               )}
             </div>
             <div className="flex flex-col justify-center ml-12">
               <p className="text-white text-base font-medium leading-normal line-clamp-1">
                 Processing your analysis
               </p>
               <p className="text-[#a7a8af] text-sm font-normal leading-normal line-clamp-2">
                 Compiling results and generating insights...
               </p>
             </div>
           </div>
   
           {/* Step 3: Analysis Complete */}
           <div className="flex items-start gap-4 px-4 min-h-[72px] py-4 relative">
             <div className={`absolute left-0 top-4 flex items-center justify-center rounded-lg ${getStepStyles('complete').iconContainer} shrink-0 size-12 z-10`}>
               {getStepStyles('complete').isCompleted ? (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('complete').icon}
                 >
                   <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,48H48V208H208V48Z"></path>
                 </svg>
               ) : (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24px"
                   height="24px"
                   fill="currentColor"
                   viewBox="0 0 256 256"
                   className={getStepStyles('complete').icon}
                 >
                   <path d="M243.31,90.83l-56-56a8,8,0,0,0-5.65-2.34H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A8,8,0,0,0,243.31,90.83ZM208,208H48V48H176V96a8,8,0,0,0,8,8h48ZM96,148a12,12,0,0,1,12-12h40a12,12,0,0,1,0,24H108A12,12,0,0,1,96,148Zm0,40a12,12,0,0,1,12-12h40a12,12,0,0,1,0,24H108A12,12,0,0,1,96,188Z"></path>
                 </svg>
               )}
             </div>
             <div className="flex flex-col justify-center ml-12">
               <p className="text-white text-base font-medium leading-normal line-clamp-1">
                 Analysis Complete
               </p>
               <p className="text-[#a7a8af] text-sm font-normal leading-normal line-clamp-2">
                 Ready to view your results!
               </p>
             </div>
           </div>
         </div>
       </div>
        
        )}
      </div>
    </div>
  );
};

export default Analysis;
