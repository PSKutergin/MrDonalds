export const totalPriceItems = order => {
    const countTopping = order.toppings && order.toppings.filter(item => item.checked).length;
    const priceTopping = (order.price * 0.1) * countTopping;

    return (order.price + priceTopping) * order.count;
}

export const formatCurrency = value => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })