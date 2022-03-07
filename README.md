# Lottery

### Live demo: <a href="https://dzsub-lottery.surge.sh/" target="_blank">Lottery</a>

### This lottery coupon generator app using Angular. Focusing on the functionality of randomness and the UI.

In the favourites part on the right I used dummy data just for illustration.
If you reload the page you lose the generated numbers and the starred favourites.

## Parameters
On the left side you need to fill the form for generating coupons.

- Same numbers allowed  [optional]
- Do not sort numbers [optional]
- Zero is allowed in your numbers [optional]
- Number of field maximum (5 - 90) [required]
- Number of your numbers (1 - 10) [required] 10 is the maximum number but can be less.
- Number of your coupons (1 - [**dynamic**]) [required]

After filled the required forms use the **Start** button to generate coupons with random numbers.
To clear the form use the **Clear** button.

## Listed coupons

In the middle of the screen there will be the generated coupons. Click on any row will remove the item from the list and will be added to the **Your Favourites** section.
The number of the rows are dynamicly change.

## Your Favourites

This section on the right uses dummy data. Click on any item to remove from the **Your Favourites** column.
