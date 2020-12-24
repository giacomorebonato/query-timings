# Query timings

A POC for testing parallel execution in NodeJS.

## Context

I have been fine tuning AWS Lambda with my friend Franco.  
The concern is not only peformance, but also costs, since charges are made per execution time.  
One of the common improvements is to make sure that async IO events like queries or requests are parallelized.  

## Testing

Once the function is fine tuned, how to make sure that the improvement gets undone by mistake? With a unit test of course!  
The repo contains an example of a Jest test that measure execution time of a mocked function.  
`setTimeout` has been used in place of the IO interaction for dimostration purposes.
