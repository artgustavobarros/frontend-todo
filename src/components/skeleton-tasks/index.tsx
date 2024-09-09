export function SkeletonTasks(){
  return(
    <>
      {
        Array.from({length: 11}).map((_, index) =>(
          <div key={String(index)} className="bg-bg-light h-14 flex items-center text-lg gap-4 hover:scale-105 hover:shadow-pattern-two animate-pulse"></div>
        ))
      }
    </>
  )
}