## Solution description 

I used PID (actually PD, I didn't need integration component) regulator. To increase reaction time I used non-linear multiplier for D (differential) part of
the PID regulator. Instead of using constant multiplier I used hyperbolic tangent to achieve the following behaviour:
1) When block is far away from the target destination - differential component of the PID regulator is multiplied by
small value (effectively close to zero). Since block is far away from the goal, no need to slow down proportional component.
2) When block is close to the target destination - differential component of the PID regulator is mulitplied by the value
effectively close to 1, so differential component starts its work and slow down block. 

Using non-linear multiplier for D component instead of constant multiplier improved my solution from 1.42 seconds to 0.8 seconds
(44% boost)

https://github.com/user-attachments/assets/578d1318-51b7-4d61-8b37-ce1b1a5b4954
