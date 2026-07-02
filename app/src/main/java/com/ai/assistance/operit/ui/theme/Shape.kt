package com.ai.assistance.operit.ui.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Shapes
import androidx.compose.ui.unit.dp

/*
 * Engie Claw shape language.
 *
 * A crisp, architectural corner set that reads as a "tool" rather than the
 * soft, pill-heavy look common to AI apps. Applied app-wide via MaterialTheme.
 */
val EngieClawShapes =
    Shapes(
        extraSmall = RoundedCornerShape(5.dp),
        small = RoundedCornerShape(9.dp),
        medium = RoundedCornerShape(14.dp),
        large = RoundedCornerShape(20.dp),
        extraLarge = RoundedCornerShape(28.dp)
    )
