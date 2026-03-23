function solution(phone_number) {
    const sliceLength = phone_number.length - 4;
    const last = phone_number.slice(-4, phone_number[phone_number.length]);
    return phone_number.length <= 4 ? phone_number : phone_number.replaceAll(/\d/g, '*').slice(-sliceLength, phone_number[phone_number.length]) + last
}