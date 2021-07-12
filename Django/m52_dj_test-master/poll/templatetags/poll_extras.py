from django import template

register = template.Library()


def repeat(value, arg):  # {{ value|akbar:arg }}
    return value * int(arg)


@register.simple_tag
def my_tag(val, exponent):
    return float(val) ** float(exponent)


@register.simple_tag()
def concat_strings(*args):
    return ','.join(args)


register.filter('repeat', repeat)

