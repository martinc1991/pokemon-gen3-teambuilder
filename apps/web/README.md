# TODO

1. **IMPORTANT**: add store persistance

- Link: https://docs.pmnd.rs/zustand/integrations/persisting-store-data#simple-example
- The problem: NextJS uses Server Side Rendering, and it will compare the rendered component on the server with the one rendered on client. But since you are using data from browser to change your component, the two renders will differ and Next will throw a warning at you.
- The solution is in this post: https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
- But the right approach will be to stop using nextjs, it just isnt the right tool for the job, but changing frameworks is going to take a while

2. Solve table row and table header widths minor differences
