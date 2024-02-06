// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className=" h-full w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full  py-6 px-8 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">Quiz Result</h1>
        <div className="flex items-center justify-center mt-8">
          <div className="text-6xl font-bold text-gray-800 dark:text-gray-100">85%</div>
        </div>
        <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-400">
          Congratulations! You've scored higher than 85% of all players.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Your Performance</h2>
          <div className="mt-4 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Correct Answers</span>
              <span className="text-gray-800 dark:text-gray-100">15</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Wrong Answers</span>
              <span className="text-gray-800 dark:text-gray-100">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Total Questions</span>
              <span className="text-gray-800 dark:text-gray-100">20</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Show Answers</h2>
          <div className="mt-4 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Question 1</span>
              <span className="text-gray-800 dark:text-gray-100">Option B</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Question 2</span>
              <span className="text-gray-800 dark:text-gray-100">Option A</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Question 3</span>
              <span className="text-gray-800 dark:text-gray-100">Option C</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Question 4</span>
              <span className="text-gray-800 dark:text-gray-100">Option D</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Question 5</span>
              <span className="text-gray-800 dark:text-gray-100">Option A</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Share Your Result</h2>
          <div className="mt-4 flex items-center justify-center space-x-4">
            {/* <Button size="icon" variant="ghost">
              <FacebookIcon className="h-6 w-6 text-blue-600" />
            </Button>
            <Button size="icon" variant="ghost">
              <TwitterIcon className="h-6 w-6 text-blue-400" />
            </Button>
            <Button size="icon" variant="ghost">
              <LinkedinIcon className="h-6 w-6 text-blue-700" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}