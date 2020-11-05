// 取得小米秒殺價的價錢
let items = []
$('.item-seckill').each(function () {
    $item = $(this)
    let name = $item.find('span.name').text().trim()
    $item.find('span.price>del').remove()
    let price = $item.find('span.price').text().trim()
    //console.log(`name:${name}, price:${price}`)
    let item = {
        name: name,
        price: price,
    }
    items.push[item]
})
let d = new Date()
console.save(items, d.toString() + '.json')