# DIP721 

## A Clone of EIP721

Somebody might find this useful or inspiring. This is pretty much just a clone of the EIP721 standard spun out into Motoko. No metadata has been added. Looks like thats just a free-for-all. I'll be working off this to create some examples that lend themselves more towards the unique properties of the IC. 

## Good updates?

1. Dfinity gives us a wonderful Result type. We can use Results with something like

```
public type Error = {
    #foo, #bar
}
```

to surface enums that which can be used for internationalization.

2. I didn't actually test this that much.

