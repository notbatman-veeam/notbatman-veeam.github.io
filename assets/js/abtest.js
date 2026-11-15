/* ===== INLINE SCRIPT (Session 2, Break-fix 2.B) =====
       A/B test: puts each visitor in group A or B (half see one version of the homepage, half another)
       and remembers the group in the hp_ab_variant cookie. It's written INLINE (directly in this page),
       not loaded from a .js file. That's the point of Break-fix 2.B. */

<script>
  (function () {
    if (document.cookie.indexOf('hp_ab_variant=') === -1) {
      var v = Math.random() < 0.5 ? 'A' : 'B';
      var d = new Date(); d.setTime(d.getTime() + 30 * 864e5);
      document.cookie = 'hp_ab_variant=' + v + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
    }
  })();
</script>
