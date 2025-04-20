package tech.bumbii.infix

/**
 * Repeat the string N times
 */
infix fun String.repeatN(times: Int): String {
    require(times >= 0)
    return this.repeat(times)
}

//infix fun String.repeatN(vararg times: Int) {
//
//}

infix fun Int.to(max: Int): IntRange {
    require(this < max)
    return this.rangeTo(max)
}

//infix fun globalFunction() {
//
//}

fun main() {
    val kotlin = "Kotlin."
    // Normal function
    println(kotlin.repeatN(3)) // Output: Kotlin.Kotlin.Kotlin.

    // Use inline function
    println(kotlin repeatN 4)
}